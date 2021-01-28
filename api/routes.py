#!/usr/bin/python
# https://pythonbasics.org/flask-tutorial-templates/
import time
import psycopg2 # Library used to connect to Postgres DB
from flask import Flask # Backend API framework
from flask import request   # REST API Library
from config import config  # Library used to read .ini file 

app = Flask(__name__)

def connect():
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # read connection parameters
        params = config()

        # connect to the PostgreSQL server
        # ** - Receive multiple arguments as a dictionary
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)        
        return conn
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        return None

@app.route('/currentTime')
def get_current_time():
    return {'time': time.time()}
    
@app.route('/fruits', methods=['POST', 'GET'])
def get_fruits():
    if request.method == 'GET':
        select_statement = 'SELECT * FROM product'
        connection = connect()
        # create a cursor
        # Allows traversal over the rows of a table
        cursor = connection.cursor()
        cursor.execute(select_statement)
        data = cursor.fetchall()
        print('Calling data', data)
        return {'fruits': data}
        # return f'Welcome to my routes {data}'
    else:
        # request.form['fruit']
        print('Hello')
        return {'name': 'Hello Mother'}
