# SmartTV Platform Library



## Overview
The SmartTV Platform Library is designed to provide a comprehensive set of tools and functionalities for developing applications on SmartTV devices. This library aims to simplify the development process and enhance the performance and user experience of SmartTV applications.



## Installation
To install the SmartTV Platform Library, use the following command:

```bash
npm install @osiris-smarttv/smarttv-platform
```

or
```bash
yarn add @osiris-smarttv/smarttv-platform
```



## Usage

Here is a basic example of how to use the SmartTV Platform Library in your project:


```javascript
import { PlatformInstance } from '@osiris-smarttv/smarttv-platform';

// Check if running on a SmartTV
if (PlatformInstance.isSmartTV()) {
  // SmartTV specific code
}

// Get current platform name
const platform = PlatformInstance.getPlatformName();
console.log(`Running on: ${platform}`);

// Check for specific platforms
if (PlatformInstance.isTizen()) {
  // Tizen-specific code
}

if (PlatformInstance.isWebOS()) {
  // WebOS-specific code
}

if (PlatformInstance.isHisense()) {
  // Hisense-specific code
}
```
