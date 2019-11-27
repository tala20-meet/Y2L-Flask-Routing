$(function() {
	var code = $(".sf-product-code").html();
	if (code) {
		$('.sf-root').click(function () { logSyleFinderEngagemnt(code.trim()); });
	}

	function logSyleFinderEngagemnt(code) {
		$.ajax({
			type: 'POST',
			url: '/r/ajax/LogStyleFinderEngagement.jsp',
			data: $.param({
				code: code
			}),
		});
	}
});