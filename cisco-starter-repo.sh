wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install node
node  -v
npm install -g yarn
yarn global add create-react-app
npx create-react-app sextant
cd sextant
npm start
