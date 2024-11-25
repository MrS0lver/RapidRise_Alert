from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # Ensure your form is in index.html

@app.route('/submit', methods=['POST'])
def submit_form():
    # Extract data from the form
    name = request.form['name']
    phone = request.form['phone']
    email = request.form['email']
    location = request.form['location']

    # Save to SQLite database
    connection = sqlite3.connect('subscribers.db')
    cursor = connection.cursor()
    cursor.execute('''
        INSERT INTO subscribers (name, phone, email, location) VALUES (?, ?, ?, ?)
    ''', (name, phone, email, location))
    connection.commit()
    connection.close()

    return "Form submitted successfully!"

if __name__ == "__main__":
    app.run(debug=True)
