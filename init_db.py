import sqlite3

# Connect to SQLite database (creates it if it doesn't exist)
conn = sqlite3.connect("subscribers.db")
cursor = conn.cursor()

# Create a table for subscribers
cursor.execute("""
CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    location TEXT NOT NULL
)
""")

conn.commit()
conn.close()
print("Database initialized successfully with name, phone, email, and location!")
