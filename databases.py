from model import Base, Product


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


engine = create_engine('sqlite:///database.db')
Base.metadata.create_all(engine)
DBSession = sessionmaker(bind=engine)
session = DBSession()

#part3-2
def add_product(name,price,picture_link,description)
	product_object = Product(
	        name=name,
	        price=price,
	        picture_link=picture_link)
	    session.add(product_object)
	    session.commit()

def update_product(name,price,picture_link,description,id):
   
   product = session.query (Student).filter_by(id=id).first()
   product.name=name
   product.price=price
   product.picture_link=picture_link
   product.id= id

   session.commit()

def delete_Product(their_id):
   
   session.query(Product).filter_by(id=their_id).delete()
   session.commit()

def product_query():
	product = session.query(product).all()
	return product

def specific_product(by_id)
	return session.query(Product).filter_by(id=their_id)





