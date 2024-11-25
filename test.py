import sqlite3

# Connect to the database
connection = sqlite3.connect('subscribers.db')
cursor = connection.cursor()

# Query the data
cursor.execute("SELECT * FROM subscribers")
results = cursor.fetchall()

# Print results
print(results)

# Close the connection
connection.close()
