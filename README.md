# ToastJS
Simple toast for web developers. 

## Installation

Clone this git repository and add the following files to your project

```bash
<link rel="stylesheet" href="toaster.css">
<script src="toaster.js"></script>
```

## Usage
Add following lines to your code

#### Inside Body
```bash
<div id="toastdiv"></div>
```

#### Inside Script
```bash
Toaster.init('toastdiv','toasterone') // This will initialize toaster with element id. 

// Create a simple toast
Toaster.toast('I am a toast !!!',"default",3000)
//Create a simple toast with success
Toaster.toast('Success toast',"success",3000)
//Create a simple toast with error
Toaster.toast('Error toast',"error",3000)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
