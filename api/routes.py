import time
from flask import Flask

app = Flask(__name__)

@app.route('/currentTime')
def get_current_time():
    return {'time': time.time()}

@app.route('/test')
def test_message():
    return {'name' :'Hello Mother'}