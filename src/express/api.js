import express from 'express';

export default class Api {
  #app

  #denon

  #port

  constructor(denonConnection, port = 8080) {
    this.#denon = denonConnection;
    this.#port = port;
  }

  start = () => {
    this.#app = express();
    this.#app.get('/api', (req, res) => { res.send('Denon API is running'); });
    this.#app.get('/api/:command', async (req, res) => {
      try {
        const command = req.params.command.toUpperCase();
        await this.#denon.connect();
        this.#denon.send(command);
        return res.status(200).send(`Command = ${command}`);
      }
      catch (ex) {
        return res.status().send(`Unable to process command: ${ex}`);
      }
    });
    this.#app.listen(this.#port);
    console.log('api up')
  }
}