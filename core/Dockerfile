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
ENV CORS_ORIGIN http://localhost:8080
ENV MIKRO_ORM_HOST sql
ENV MIKRO_ORM_USER admin
ENV MIKRO_ORM_PASSWORD password

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