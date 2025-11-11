## Base Image

FROM node:lts-slim AS base

# Set the working directory for the application
WORKDIR /usr/src/app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./

# Install all dependencies
RUN npm ci

# Copy tsconfig.json
COPY tsconfig.json ./

################################################################################

## Development Environment

FROM base AS dev

# Copy the rest of the application code
COPY . .

# Expose ports for both the application and debugging
EXPOSE 3000
EXPOSE 9229

ENV NODE_ENV development

ENV APP_HOST 0.0.0.0
ENV APP_PORT 3000
ENV CORS_ORIGIN http://localhost:8080

ENV SQL_HOST sql
ENV SQL_PORT 3306
ENV SQL_USER admin
ENV SQL_PASSWORD password

ENV NOSQL_HOST nosql
ENV NOSQL_PORT 27017
ENV NOSQL_DATABASE public
ENV NOSQL_AUTH_SOURCE admin
ENV NOSQL_USER admin
ENV NOSQL_PASSWORD password

# The command to run during development
CMD [ "npm", "run", "dev" ]

# ################################################################################

# ## Stage 3: Production Build

# FROM base AS build

# # Copy all source files
# COPY . .

# # Compile the TypeScript code
# # This command creates the final JavaScript output in a 'dist' directory,
# # as configured in tsconfig.json
# RUN npm run build

# ################################################################################

# ## Stage 4: Production Image

# FROM node:lts-slim AS prod

# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json and install dependencies
# COPY package*.json ./

# # Install all dependencies
# RUN npm ci --omit=dev

# # Copy only the production dependencies and compiled code from the build stage
# COPY --from=build /usr/src/app/dist ./dist

# # Set a non-root user for improved security
# USER node

# EXPOSE 3000

# # Define the command to start your application
# # This runs the compiled JavaScript code from the 'dist' directory
# CMD [ "node", "dist/index.js" ]