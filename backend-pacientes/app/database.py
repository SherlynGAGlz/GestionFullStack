import pymysql
import os 
from dotenv import load_dotenv

load_dotenv()

#This is important because it have information secure and separate from the code.
def get_mysql_connection(): 
    return pymysql.connect( #returns a conecction to the MySQL database using the parameters defined in the .env file
        host=os.getenv("MYSQL_HOST"),
        port=int(os.getenv("MYSQL_PORT", 3306)),
        user=os.getenv("MYSQL_USER"),
        password=os.getenv("MYSQL_PASSWORD"),
        database=os.getenv("MYSQL_DB"),
        cursorclass=pymysql.cursors.DictCursor #returns the data as a dictionary
    )
    
    