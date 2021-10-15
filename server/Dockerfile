FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://pavan:pavan@shapeai.ujqaw.mongodb.net/Zomato?retrywrites=true&w=majority
ENV GOOGLE_CLIENT_ID=71152662867-erjpjpqdg070vn28klfq36eikvctms3r.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=G12KzxHZDiVtlyk9z_NIprQx
ENV AWS_ACCESS_KEY_ID=AKIA5ACNNJB2ZTGF5S6N
ENV AWS_SECRET_ACCESS_KEY=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
ENV MAILGUN__API__KEY=7e9db12fba95f54bd9a105e51bb0db2c-443ec20e-1a44fb5a
ENV MAILGUN__DOMAIN=sandboxf04bb91acb34427cbfaab5c8a96f298e.mailgun.org
ENV RZR_PAY_ID=rzp_test_SiohtX7LCLgpqP
ENV RZR_PAY_SECRET=DFDCsl7wCnqc7apFpCMI4AEL

RUN npm run build


CMD ["npm", "run", "start"]