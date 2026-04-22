# Angular-EJ2-Grid-server-side-exporting

## Repository Description

This repository demonstrates how to implement server-side Excel and PDF exporting in an Angular application using the Syncfusion EJ2 Angular Grid component with a URL-based data source.

## Project Overview

This sample Angular application showcases the integration of the Syncfusion EJ2 Angular Grid with server-side export functionality. The grid retrieves data through a `DataManager` configured with a `UrlAdaptor`, enabling communication with server endpoints for data operations. Toolbar options are provided to export grid data directly from the server into Excel and PDF formats.

The example focuses on handling export actions using toolbar click events and routing those actions to corresponding backend URLs, making it suitable for scenarios where large datasets or secure data handling are required.

## Key Features

- Angular component-based implementation
- Syncfusion EJ2 Angular Grid integration
- Server-side data binding using `DataManager`
- Excel export using server endpoint
- PDF export using server endpoint
- Toolbar-driven export actions

## Prerequisites

- .NET SDK 
- Node.js
- Angular CLI
- Syncfusion EJ2 Angular Grid package
- Backend endpoints for data and export handling
- Basic understanding of Angular components and services

## Usage

The grid is configured with a toolbar containing Excel and PDF export options. When a toolbar button is clicked, the corresponding server export method is triggered using the Grid component reference. Exported files are generated on the server and returned to the client.

## Running the Application

1. Clone the project repository and navigate to the project root directory:
    ```
    git clone <repo_link>
    cd  <project>
    ```
2. Navigate to the Angular client folder and install the required Node.js dependencies:
    ```
    cd ClientApp 
    npm i
    ```
3. Restore the ASP.NET MVC packages and run the application:
    ```
    dotnet restore
    dotnet run
    ```

## Reference Documentation
 
- [Getting started with ASP.NET MVC Grid](https://ej2.syncfusion.com/aspnetmvc/documentation/grid/getting-started-mvc) 
- [URL Adaptor](https://ej2.syncfusion.com/aspnetmvc/documentation/grid/connecting-to-adaptors/url-adaptor)
- [Excel Export](https://ej2.syncfusion.com/aspnetmvc/documentation/grid/excel-export/exporting-grid-in-server)
- [API Reference](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.grids.grid.html)
