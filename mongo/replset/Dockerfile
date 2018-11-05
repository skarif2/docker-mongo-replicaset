FROM mongo:4

# Create app directory
WORKDIR /usr/src/configs

# Install app dependencies
COPY replset.js .
COPY setup.sh .

CMD ["./setup.sh"]