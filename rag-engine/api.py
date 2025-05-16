# rag-engine/api.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import rag  # Import your existing RAG module

app = Flask(__name__)
CORS(app)

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question', '')
    
    if not question:
        return jsonify({'error': 'No question provided'}), 400
    
    try:
        # Use your existing RAG function
        answer = rag.ask_question(question)
        
        # In a more advanced implementation, you might also extract sources
        # For now, we'll return a placeholder
        sources = ["data/circulars2.pdf"]
        
        return jsonify({
            'answer': answer,
            'sources': sources
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
