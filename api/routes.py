#!/usr/bin/python
# https://pythonbasics.org/flask-tutorial-templates/
import time
from json import *
import psycopg2  # Library used to connect to Postgres DB
from psycopg2.extras import RealDictCursor # Converts rows to dict
from flask import Flask, request, json, make_response # Backend API framework
from config import config  # Library used to read .ini file 
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

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

@app.route('/test')
def test():
    return {'test': 'Hello Mother'}
       
@app.route('/tasks', methods=['POST', 'GET'])
def tasks():
    connection = None
    try:
        if request.method == 'GET':
            select_statement = 'SELECT * FROM tasks'

            # connects to Postgres DB
            connection = connect()

            # create a cursor to iterate through rows
            cursor = connection.cursor(cursor_factory=RealDictCursor)
            cursor.execute(select_statement)
            
            # returned data
            results = cursor.fetchall()

            # close connection
            cursor.close()
            
            res = make_response(json.jsonify(results), 300)
            # return f'Welcome to my routes {results}'
            return res
            # return json.jsonify(tasks=results)
            # return jsonify(results)
        else:
            # request.form['fruit']
            print('Hello')
            # return {'name': 'Hello Mother'}
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if connection is not None:
            connection.close()
            print('Database is now closed....')
