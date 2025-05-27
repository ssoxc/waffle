#!/bin/bash
# Run linting checks
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Please fix the issues before committing."
  exit 1
fi

# Run tests
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the issues before committing."
  exit 1
fi

exit 0
