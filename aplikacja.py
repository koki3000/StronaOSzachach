from flask import Flask, render_template, request, session
from flask_session import Session

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
notes = []

@app.route("/gra", methods=["GET", "POST"])
def gra():
    if request.method == "POST":
        note = request.form.get("note")
        notes.append(note)
    return render_template("Gra.html", notes=notes)

@app.route("/ruchy")
def ruchy():
    return render_template("Ruchy.html")

@app.route("/zasady")
def zasady():
    return render_template("Zasady.html")

@app.route("/")
def wstep():
    return render_template("Wstep.html")