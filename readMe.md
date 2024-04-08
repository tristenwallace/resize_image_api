# Image API

## Overview
Image API is a Node.js Express application designed to dynamically process and serve images. It allows for rapid prototyping by serving placeholder images with specified sizes and offers a library to serve properly scaled versions of images to optimize frontend performance.

## Features

**Dynamic Image Resizing:** Generate images of any size on-the-fly, perfect for responsive design testing and development.

**Caching:** Processed images are cached for efficient retrieval, reducing server load and improving response times.

## Getting Started

### Prerequisites

- Node.js (version 12.x or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repo with `git clone https://github.com/your-username/image-api.git`
2. Install dependencies with `npm run install`
3. Build the dist/ folder with `npm run build`
4. Start the server with `npm run start`

### Testing

To run the automated test suite: `npm run test`


## Using The API

To resize an existing image, provide the image name along with the desired dimensions:

```
GET /image?imageName=example&width=600&height=400
```

If image doesn't exist on the server, it wil return the following error `Original image not found`.

Future iterations could include building a frontend for people to upload images to the server in order to resize them and creating accounts so that they're privately accessible.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -am 'Add a new feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request.
