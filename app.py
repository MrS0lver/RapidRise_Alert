from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

# Connect to SQLite Database
def get_db_connection():
    conn = sqlite3.connect('subscribers.db')
    conn.row_factory = sqlite3.Row  # This allows column names to be used like dict keys
    return conn

@app.route('/subscribers', methods=['GET'])
def get_subscribers():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Fetch all records from the 'subscribers' table
    cursor.execute('SELECT * FROM subscribers')
    subscribers = cursor.fetchall()  # Fetch all records
    
    conn.close()

    # Format the data into a list of dictionaries
    subscribers_list = []
    for subscriber in subscribers:
        subscribers_list.append({
            'id': subscriber['id'],
            'name': subscriber['name'],
            'phone': subscriber['phone'],
            'email': subscriber['email'],
            'location': subscriber['location']
        })
    
    # Return data as JSON
    return jsonify(subscribers_list)

if __name__ == "__main__":
    app.run(debug=True)
