# QlikSensePyButton
Qlik Sense interface button that runs function defined in Python SSE plugin. It runs user-defined Python script and passes user-defined arguments. (It could be helpful if you want to make action on some other systems/sources using Qlik Sense Interface and Python). 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. Before installing QlikSensePyButton, you'll need [Python SSE Plugin](https://github.com/qlik-oss/server-side-extension).
2. Then, an easy way to define your own functions - use one of the SSE python examples. 
    * Add your functions as @staticmethods to server-side-extension-master\examples\python\fullscriptsupport_pandas\scripteval.py (Lines 206-214) and link them to exec lines (231-232)
  ![Alt](https://github.com/punkerpunker/QlikSensePyButton/blob/master/functions_definition.png "Define functions")
    * Add following line to Qlik\Sense\Settings.ini 
    ```
    [Settings 7] SSEPlugin=ScriptPandas,localhost:50056 
    ```
    * Run following line in cmd:
    ```
    python Documents\Qlik\server-side-extension-master\examples\python\fullscriptsupport_pandas
    ```
After this steps, you are ready to install and use QlikSensePyButton

### Installing

To install QlikSensePyButton you need to [Download master branch](https://github.com/punkerpunker/QlikSensePyButton/archive/master.zip) and unpack it into Qlik/Sense/Extensions/QlikSensePyButton

### Preview

![Alt](https://github.com/punkerpunker/QlikSensePyButton/blob/master/edit_panel.png "Edit panel")
![Alt](https://github.com/punkerpunker/QlikSensePyButton/blob/master/screenshot.png "Button preview")


### Usage Example

![Alt](https://github.com/punkerpunker/QlikSensePyButton/blob/master/usage.gif "Usage")

## Authors

* **Gleb Vazhenin** - *Initial work* - [Punker](https://github.com/punkerpunker)
