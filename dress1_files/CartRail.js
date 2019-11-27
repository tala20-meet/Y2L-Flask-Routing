/**
 *
 */
$(function(){

    updateRailTopPos();
    loadRailContent();

    $(document).on("scroll.rail", function(){
        setTimeout(updateRailTopPos, 50);
    });


    stopAnimationInView();
      $('.js-rail-close').on('click', function(e){
          e.preventDefault();
          $(".js-rail").removeClass("is-active");
          $(".rail__product-details").css("display", "block");
          $(".rail__product-options").css("display", "none");
          if(docCookies && typeof docCookies.setItem === 'function'){
              docCookies.setItem("cartRailClosed", true, 1 * 86400, "/");
          }
      });
      $('.js-rail-open').on('click', function(e){
          e.preventDefault();
        $(".js-rail").addClass("is-active");
        $(".js-rail").removeClass("rail--no-animation");
        $(".rail__hed > .h5").focus();
        if(docCookies && typeof docCookies.setItem === 'function'){
            docCookies.setItem("cartRailClosed", '', 1 * 86400, "/");
        }
      });

});

function stopAnimationInView() {
  if($( window ).width() > 1600) {
    $('.js-rail').addClass('rail--no-animation');
    breaky.below("large-desktop", function() {
        $('.js-rail').removeClass('rail--no-animation');
    });
  }
}

function loadRailContent() {
    $.ajax({
        type: 'POST',
        url: '/r/ajax/GetCartRailContent.jsp',
        success: function(ajaxResponse){
            var responseObject = JSON.parse(ajaxResponse);
            if(responseObject.success) {
                updateRailVisibility(responseObject.data);
                updateRailHeader(responseObject.data);
                updateRailItems(responseObject.data);
                updateRailFooter(responseObject.data);
                $(".js-quantity-subtract").on("click", function(){
                    calculateQuantity($(this));
                });

                $(".js-quantity-add").on("click", function(){
                    calculateQuantity($(this));
                });
                $(".rail-btn-move-to-favs").on("click", function(){
                    moveCartRailItemToFavs($(this));
                });
                $(".rail-btn-remove").on("click", function(){
                    removeCartRailItem($(this));
                });
            } else {
                console.log(responseObject.errorDescription);
            }
        }
    });
}

function checkWindowSize() {
  var size = $(window).width();
  if (size < 1710) {
    $('.js-rail-open').hide();
  } else {
    $('.js-rail-open').show();
  }
}

function checkResizedWindow() {
  $(window).on('resize', function() {
    checkWindowSize();
  });
}

function updateRailVisibility(cartRailData) {

  if(cartRailData.itemsCount > 0) {
    if(docCookies && typeof docCookies.getItem === 'function'){
      if(docCookies.getItem("cartRailClosed") != 'true'){
        $(".js-rail").addClass("is-active");
      }
    }else{
      $(".js-rail").addClass("is-active");
    }
    checkWindowSize();
    checkResizedWindow();
  } else {
    $(".js-rail").removeClass("is-active");
    $('.js-rail-open').hide();
  }
}



function updateRailHeader(cartRailData) {
    $(".rail__hed").empty();

    var divPreview = $("<h2 id=\"js-focus-hed\" tabindex=\"0\" class=\"h5 u-margin-t--none u-margin-b--md\">" + cartRailData.bagPreviewText + "</h2>");

    $(".rail__hed").append(divPreview);

    if(cartRailData.subtotalCount > 0) {
        var bottomMarginClass = cartRailData.preorderCount > 0 ? "u-margin-b--md u-text--md" : "u-margin-b--xl u-text--md";

        var divSubtotalCount = $("<div class='"+bottomMarginClass+"'>"
            + cartRailData.subtotalText + " (<span class=\"js-quantity-grand-total\">"
            + cartRailData.subtotalCount + "</span>) : "
            + cartRailData.subTotalAmount + "</div>");
        $(".rail__hed").append(divSubtotalCount);
    }

    if(cartRailData.preorderCount > 0) {
        var divPreorderCount = $("<div class=\"u-margin-b--xl u-text--md\">"
            + cartRailData.preorderText + " (<span class=\"js-quantity-grand-total\">"
            + cartRailData.preorderCount + "</span>) : "
            + cartRailData.preorderTotalAmount + "</div>");
        $(".rail__hed").append(divPreorderCount);
    }


}

function updateRailFooter(cartRailData) {

    $(".rail__footer").empty();

    if(cartRailData.itemsCount > 0) {
        var checkoutLink = $("<a class=\"btn u-full-width u-margin-b--lg\" href=\"/r/SignInCheckout.jsp?navsrc=cartrail\">"
            + cartRailData.proceedToCheckoutText + "</a>");

        var viewBagLink = $("<a class=\"link u-text--md\" href=\"/r/ShoppingBag.jsp?navsrc=cartrail\">"
            + cartRailData.viewBagText + "</a>");
        $(".rail__footer").append(checkoutLink);
        $(".rail__footer").append(viewBagLink);
    }
}

function updateRailItems(cartRailData) {
    $(".rail__product-list").empty();

    var railItems = cartRailData.cartRailItems;

    if(!(railItems == null)) {

        for (index = 0, len = railItems.length; index < len; ++index) {

            var railItem = railItems[index];

            if(!(railItem == null)) {
                var divProductTable = $("<div tabindex=\"0\" class=\"rail__product table table--fixed\"></div>");

                var imageDiv = $("<div class=\"rail__product-image table__cell table__cell--middle\"></div>");
                var imageLink = $("<a href=\"" + railItem.itemSectionUrl + "\"></a>");
                var imageSrc = $("<img src=\"" + railItem.itemImageUrl + "\" alt=\""+railItem.itemDescription +"\"/>");

                imageLink.append(imageSrc);
                imageDiv.append(imageLink);
                divProductTable.append(imageDiv);

                var disabledStatus = "disabled";
                var disableIncreaseQty = "disabled";
                if(railItem.itemQuantity && railItem.itemQuantity > 1) {
                    disabledStatus = "";
                }
                if(!railItem.isOneLeft){
                    disableIncreaseQty = "";
                }

                var divTableCell = $("<div class=\"table__cell table__cell--middle u-line-height--sm\"></div>");
                var divItemDetails = $("<div class=\"rail__product-details\"></div>");
                var divItemOptions = $("<div class=\"rail__product-options\"></div>");
                var divItemDescription = $("<div class=\"product-name u-ellipsis\">" +
                    railItem.itemDescription + "</div>");
                var divItemBrandName = $("<div class=\"product-brand u-ellipsis\">" +
                    railItem.itemBrandName + "</div>");
                var divItemSize = $("<div class=\"u-text--md u-ellipsis\">" +
                    cartRailData.sizeText + ": " +
                    railItem.itemSize + "</div>");
                var divItemCount = $("<div class=\"u-text--md u-ellipsis\">" +
                    cartRailData.quantityText + ": " +
                    railItem.itemQuantity + "</div>");
                var inventoryAlert = railItem.inventoryAlert ? $("<div class=\"u-text--md u-ellipsis u-color--red\">" +
                    railItem.inventoryAlert + "</div>") : '';
                var divOptionsQuantity = $("<div class='js-quantity-wrap  rail__quantity-wrap'>" +
                    "<button role=\"button\" class='js-quantity-subtract btn u-padding-a--none btn--circle' " +
                    "data-product-code='"+ railItem.productCode + "'" +
                    "data-item-size-value='"+ railItem.itemSizeValue + "'" +
                    disabledStatus + ">" +
                    "<span class='icon icon--lg icon--minus'>" +
                    "<svg focusable=\"false\" aria-hidden=\"true\"><use xlink:href='#icon-minus'></use></svg>" +
                    "</span>" +
                    "</button>" +
                    "<div class='js-quantity-total rail__product-quantity h4 u-inline-block'>" +
                    railItem.itemQuantity + "</div>" +
                    "<button role=\"button\" class='js-quantity-add btn u-padding-a--none btn--circle'" +
                    "data-product-code='"+ railItem.productCode + "'" +
                    "data-item-size-value='"+ railItem.itemSizeValue + "'" +
                    "data-item-section-url='"+ railItem.itemSectionUrl + "'" +
                    disableIncreaseQty +
                    ">" +
                    "<span class='icon icon--lg icon--plus'><svg focusable=\"false\" aria-hidden=\"true\"> <use xlink:href='#icon-plus'></use> </svg>" +
                    "</span></button></div>");
                var hideFavClass = cartRailData.hideMoveToFavorites ? " u-hide" : "";
                var buttonMoveToFavs = $("<button " +
                    "class=\"u-text--md u-font-primary u-ellipsis link--default u-color--black rail-btn-move-to-favs"
                    + hideFavClass + "\"" +
                    "data-product-code='"+ railItem.productCode + "'" +
                    "data-item-size-value='"+ railItem.itemSizeValue + "'" +
                    "data-item-quantity='"+ railItem.itemQuantity + "'" +
                    "data-item-section-url='"+ railItem.itemSectionUrl + "'" +
                    ">" + cartRailData.moveToFavoritesText + "</button>");
                var buttonRemove = $("<button " +
                    "class=\"u-text--md u-font-primary u-ellipsis link--default u-color--black rail-btn-remove\"" +
                    "data-product-code='"+ railItem.productCode + "'" +
                    "data-item-size-value='"+ railItem.itemSizeValue + "'" +
                    "data-item-quantity='"+ railItem.itemQuantity + "'" +
                    "data-item-is-gift-certificate='"+ railItem.isGiftCertificate + "'" +
                    "data-item-serial='"+ railItem.serialNumber + "'" +
                    ">" + cartRailData.removeText + "</button>");

                divItemDetails.append(divItemDescription);
                divItemDetails.append(divItemBrandName);
                if(!railItem.isGiftCertificate) {
                    divItemDetails.append(divItemSize);
                    divItemDetails.append(divItemCount);
                    if(inventoryAlert)
                        divItemDetails.append(inventoryAlert);
                }
                if (railItem.isFitRoomTryOnItem){
                    divItemDetails.append("<div class='price'><span class='price__retail'>"+cartRailData.tryOnItemPriceDisplay+"</span></div>");
                    divItemDetails.append("<div class=\"u-margin-t--md\"><span class=\"u-color--red u-weight--bold\">"+
                        cartRailData.fittingRoomItemMsg +"</span></div>");
                } else {
                    if(railItem.originalPrice) {
                        divMarkdownPrice = "<div class='price price--on-sale'><span class='price__sale'>" + railItem.price + " </span>";
                        divMarkdownPrice += "<span class='u-screen-reader'>Previous price:</span>" + "<span class='price__retail'>" +
                            railItem.originalPrice + "</span></div>";
                        divItemDetails.append(divMarkdownPrice);
                    } else {
                        divMarkdownPrice = "<div class='price'><span class='price__retail'>" + railItem.price +
                            "</span></div>";
                        divItemDetails.append(divMarkdownPrice);
                    }
                }
                if(!railItem.isGiftCertificate && !railItem.isFitRoomTryOnItem) {
                    divItemOptions.append(divOptionsQuantity);
                    divItemOptions.append(buttonMoveToFavs);
                }
                divItemOptions.append(buttonRemove);

                if(railItem.isGiftCertificate) {
                    var recipient = "";
                    if(typeof railItem.recipient !== "undefined") {
                        recipient = $("<div>To: "+railItem.recipient+"</div>");
                    }
                    divItemDetails.append("<br />&nbsp;");
                    divItemDetails.append(recipient);
                }

                divTableCell.append(divItemDetails, divItemOptions);
                divProductTable.append(divTableCell);

                $(".rail__product-list").append(divProductTable);

                // Make Rail Accessible - Start - create ES6 module
                $jsRailTrigger = document.querySelectorAll(".rail__product");
                $jsRailTrigger.forEach(function(element) {
                  element.addEventListener('mouseenter', handleView, false);
                  element.addEventListener('mouseleave', handleView, false);
                  element.addEventListener('focus', handleView, false);
                });

                function handleView(e) {
                  var elem = $(e.currentTarget);
                  var details = elem.find(".rail__product-details");
                  var options = elem.find(".rail__product-options");
                  if(e.type === 'mouseenter' || e.type === 'focus') {
                    details.hide();
                    options.show();
                  }
                  if(e.type === 'mouseleave') {
                    details.show();
                    options.hide();
                  }
                };

                var scrollToElement = document.getElementById("js-focus-hed");
                scrollToElement.addEventListener('focus', function() {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                // Make Rail Accessible - End
            }
        }
    }
}

function updateRailTopPos() {

    var scrollTop = $(window).scrollTop();
    var $siteHeader = $(".site-header__content");

    var siteHeaderOffset = $siteHeader.outerHeight(true) + $siteHeader.offset().top - scrollTop;

    $(".js-rail")
       .css({marginTop: siteHeaderOffset});
}

function moveCartRailItemToFavs($self) {
    var productCode = $self.attr('data-product-code');
    var itemSizeValue = $self.attr('data-item-size-value');
    var productQuantity = $self.attr('data-item-quantity');
    var productSectionUrl = $self.attr('data-item-section-url');

    var isGuest = $('#myFavLimitPopup').data('isGuest');
    var productSize = eval($("#heart_total_count").html());
    if (isGuest) {
        $('#guestLimitPop, #fav-create-link').attr('href', "/r/SignIn.jsp?favcode=" + productCode +"&page=" + encodeURIComponent(window.location.pathname + window.location.search));
        $.modal({triggerOpen:true, open: "guestLimitPop", type: "small"});
        return;
    } else if (!isGuest && productSize > 1999) {
        $.modal({triggerOpen:true, open: "userLimitPop"});
        return;
    }

    removeProduct(productCode, itemSizeValue, productQuantity, function (productQuantity) {
        submitHeart("product", productCode, "add", itemSizeValue, productSectionUrl, -1, function(productQuantity) {
            decrementBagCount(productQuantity);
            updateMiniBag();
            loadRailContent();
        });
    });
}

function removeCartRailItem($self) {
    var productCode = $self.attr('data-product-code');
    var itemSizeValue = $self.attr('data-item-size-value');
    var productQuantity = $self.attr('data-item-quantity');
    var isGiftCertificate = $self.attr('data-item-is-gift-certificate');
    var itemSerial = $self.attr('data-item-serial');

    if(isGiftCertificate == "false") {
        removeProduct(productCode, itemSizeValue, productQuantity, function (productQuantity) {
            decrementBagCount(productQuantity);
            updateMiniBag();
            loadRailContent();
        });
    } else if (itemSerial) {
        removeProductSerial(productCode, itemSizeValue, productQuantity, itemSerial, function (productQuantity) {
            decrementBagCount(productQuantity);
            updateMiniBag();
            loadRailContent();
        });
    }
}

function calculateQuantity( $self ) {
    var $quantityWrap = $self.closest(".js-quantity-wrap");
    var $quantityTotal = $quantityWrap.find(".js-quantity-total");
    var currentNumber = Number($quantityTotal.text());

    if($self.hasClass( "js-quantity-subtract" )) {
        if(currentNumber > 1) {
            var productCode = $self.attr('data-product-code');
            var itemSizeValue = $self.attr('data-item-size-value');
            removeProduct(productCode, itemSizeValue, 1, function() {
                updateMiniBag();
                loadRailContent();
            });
        }
    } else if($self.hasClass( "js-quantity-add" )) {
        var productCode = $self.attr('data-product-code');
        var itemSizeValue = $self.attr('data-item-size-value');
        var productSectionUrl = $self.attr('data-item-section-url');
        addProduct(productCode, itemSizeValue, productSectionUrl, "", 1, function(){
            updateMiniBag();
        }, null, null, null, 'CartRail');
    }
}
