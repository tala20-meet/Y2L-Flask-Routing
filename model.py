from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Product(Base):
   __tablename__ = 'Product'
   Name = Column(String)
   Price = Column(Float)
   Picture Link = Column(String)
   Description = Column(String)

class Cart(Base);
	__tablename__ = 'Cart'
	ProductID = Column(Product)