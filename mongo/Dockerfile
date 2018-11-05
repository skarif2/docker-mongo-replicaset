FROM mongo

# Create app directory
WORKDIR /configs

# Copy config files
COPY mongo.conf .

EXPOSE 27017

CMD ["--config", "./mongo.conf"]