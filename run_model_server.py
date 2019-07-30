from keras.models import load_model
from keras.preprocessing.image import img_to_array
from keras.applications import imagenet_utils
from flask_cors import CORS
from PIL import Image
import numpy as np
import flask
import io
import pickle
import cv2

def load_model_():
  global model
  model = load_model('pokedex.model')
  model._make_predict_function()

def load_label():
  global lb
  lb =  pickle.loads(open('lb.pickle', 'rb').read())

def prepare_image(image_bytes, size):

  img_np = np.frombuffer(image_bytes, np.uint8)
  image = cv2.imdecode(img_np, cv2.IMREAD_GRAYSCALE)
  image = cv2.resize(image, size)
  image = image.astype('float') / 255.0
  image = img_to_array(image) 
  image = np.expand_dims(image, axis=0) 
  
  return image

app = flask.Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})
model = None
lb = None
IMG_SIZE = (96,96)

@app.route('/pokedex/predict', methods=['POST'])
def predict():

  PROB = 0
  INDEX = 1
  data = {'success': False}

  if (flask.request.method == "POST"):
    if (flask.request.files.get('image')):
      
      image_bytes = flask.request.files['image'].read()
      image = prepare_image(image_bytes, IMG_SIZE)
      
      preds = model.predict(image)[0]
      data["predictions"] = []

      # probability and index
      maxi = (-1, 0)
      i = 0
      for pred in preds:
        
        prob = pred * 100
        label = lb.classes_[i]
        result = {'label': label, 'probability': "{:.2f}%".format(prob)}
        data['predictions'].append(result)

        if prob > maxi[PROB]: maxi = (prob, i)
        i += 1

      prob = maxi[PROB] 
      index = maxi[INDEX]
      label = lb.classes_[index]
      data['max'] = {'label': label, 'probability': "{:.2f}%".format(prob) }   
      data['success'] = True
  
  return flask.jsonify(data)

if __name__ == "__main__":
  print("[INFO] loading keras model and flask starting server...")

  load_model_()
  load_label()
  app.run()
