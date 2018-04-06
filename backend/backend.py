#!/usr/bin/env python
from flask import Flask, jsonify
from flask_cors import CORS
from math import ceil

app = Flask(__name__)
CORS(app)

@app.route('/api/v1.0/floppies/<int:data_size>/<string:data_unit>')
def calculate_floppies(data_size, data_unit):

    # Floppy is 1.44MB
    modifiers = {
        'KB': float(10) ** float(-3),
        'MB': 1,
        'GB': float(10) ** float(3),
        'TB': float(10) ** float(6),
        'PB': float(10) ** float(9),
    }
    return jsonify({
        'data_size': data_size,
        'data_unit': data_unit,
        'floppies': int(ceil(float(modifiers[data_unit]) * float(data_size) / float(1.44)))
    }), 200

if __name__ == '__main__':
    app.run(debug=True)