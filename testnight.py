import psycopg2
import os
import xlrd
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

book = pd.read_excel('7adeb9ae-5a8b-497d-897d-aab0d1f6da85.xlsx', engine='openpyxl')
sheet = "AzureUsage"

colnam = sorted(book)
book['Cost'] = book['Cost'].apply(lambda x: float(x.replace(',', '.')))
print(book['Cost'][1])

database = psycopg2.connect(database=os.getenv("DATABASE_NAME"), user=os.getenv("DATABASE_USERNAME"), password=os.getenv("DATABASE_PASSWORD"), host=os.getenv("DATABASE_IP"), port="5432")


cursor = database.cursor()
print("connexion")
print(cursor)

#creation de la table
query_table = """CREATE TABLE IF NOT EXISTS users(id serial PRIMARY KEY NOT NULL, nom VARCHAR(100) NOT NULL)"""
values = ("ma_column")

def creatabl():
    cursor.execute("CREATE TABLE IF NOT EXISTS AZURE4(id serial PRIMARY KEY NOT NULL, SubscriptionName VARCHAR(255), SubscriptionGuid VARCHAR(255), Date TIMESTAMP, ResourceGuid VARCHAR(255), ServiceName VARCHAR(255), ServiceType VARCHAR(255), ServiceRegion VARCHAR(255), ServiceResource VARCHAR(255), Quantity FLOAT, Cost FLOAT)")
    database.commit()

creatabl()
# cursor.execute("CREATE TABLE IF NOT EXISTS test (id serial PRIMARY KEY, num integer, data varchar);")

# def createTable():
#         print("hello")
#         cursor.execute("DROP TABLE IF EXISTS users")
#         cursor.execute("CREATE TABLE IF NOT EXISTS users44 (id serial PRIMARY KEY NOT NULL, nom VARCHAR(100) NOT NULL)")



query = """INSERT INTO AZURE4 (SubscriptionName, SubscriptionGuid, Date, ResourceGuid, ServiceName, ServiceType, ServiceRegion, ServiceResource, Quantity, Cost) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
print(colnam)
for r in range(1, 601):
    print(r)
    book = pd.read_excel('7adeb9ae-5a8b-497d-897d-aab0d1f6da85.xlsx', engine='openpyxl')
    book['Cost'] = book['Cost'].apply(lambda x: float(x.replace(',', '.')))
    book['Quantity'] = book['Quantity'].apply(lambda x: float(x.replace(',', '.')))
    # print(book['Cost'][r])
    SubscriptionName = book.at[r,colnam[9]]
    SubscriptionGuid = book.at[r,colnam[8]]
    Date = book.at[r,colnam[1]]
    ResourceGuid = book.at[r,colnam[3]]
    ServiceName = book.at[r,colnam[4]]
    ServiceType = book.at[r,colnam[7]]
    ServiceRegion = book.at[r,colnam[5]]
    ServiceResource = book.at[r,colnam[6]]
    Quantity = book.at[r,colnam[2]]
    Cost = book.at[r,colnam[0]]
    
    values = (SubscriptionName, SubscriptionGuid, Date, ResourceGuid, ServiceName, ServiceType, ServiceRegion, ServiceResource, Quantity, Cost)

    cursor.execute(query, values)
    if r%100 ==0:
        database.commit()
        print("commit")
cursor.close()

database.commit()

database.close()

# print("")
# columns = str(sheet.ncols)
# rows = str(sheet.nrows)
# print("I just imported Excel into postgreSQL") 



# #version 1
# pandas.read_excel('cat.xlsx', engine='openpyxl')
# #versio 2 avec openpyxl
# df1 = pd.read_excel(
#      os.path.join(APP_PATH, "Data", "aug_latest.xlsm"),
#      engine='openpyxl',
# )

