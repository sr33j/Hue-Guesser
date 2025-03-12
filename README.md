# Hue Guesser

Hue Guesser is a color guessing game similar to Wordle and other mini-games. The objective of the game is to guess the RGB values of a displayed color.

## Features

- Display a random color for users to guess.
- Users input RGB values and submit their guess.
- Feedback is provided based on how close the guess is to the actual RGB values.

## Getting Started

### Prerequisites

- Python installed on your system.
- Ensure `pip` is available to install dependencies.

### Installation

1. Clone the repository.

2. Navigate to the project directory.

3. Install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

### Running the App

Start the Flask app with the following command:

```
python app.py
```

By default, the app will run on `http://0.0.0.0:5000`.

### Deployment

Hue Guesser can be deployed using any WSGI-compatible server, such as Gunicorn:

```
gunicorn -w 4 app:app
```

This command starts the app with 4 worker processes.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.