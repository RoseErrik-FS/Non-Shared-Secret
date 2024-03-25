# Non-Shared Secret Example

This repository demonstrates using a non-shared secret file (`.env`) that is not committed to the repository in a Node.js application.

## Project Structure

- `nonSharedSecret.js`: The main application file that reads the secret from the `.env` file.
- `.env`: The file containing the non-shared secret (not committed to the repository).
- `.gitignore`: The file that specifies files and directories to be ignored by Git.

## Usage

1. Clone the repository:

``git clone <repository-url>``


2. Navigate to the project directory:

``cd nonSharedSecret``


3. Create a `.env` file in the project directory with the following content:

``SECRET_TOKEN=<your-secret-token>``

Replace `<your-secret-token>` with your actual secret token.

4. Run the application:

``node index.js``


## Notes

- The `.env` file is not committed to the repository, ensuring that the secrets are not exposed.
- Make sure to add `.env` to your `.gitignore` file to prevent accidental commits of the secret file.
