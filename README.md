# Blog
Angular 8 CRUD blog app with .NET Core 2.2 and Entity Framework back-end

Tutorial part 1: Build a Simple CRUD App with Angular 8 and ASP.NET Core 2.2 - part 1 - back-end
https://dev.to/dileno/build-a-simple-crud-app-with-angular-8-and-asp-net-core-2-2-part-1-back-end-39e1

Tutorial part 2: Build an Angular 8 App with REST API and ASP.NET Core 2.2 - part 2
https://dev.to/dileno/build-an-angular-8-app-with-rest-api-and-asp-net-core-2-2-part-2-46ap

## Prerequisites

* [.NET Core 2.2 SDK](https://dotnet.microsoft.com/download)

* [Visual Studio 2019](https://visualstudio.microsoft.com/vs/)

For the Angular front-end we'll also use:

* [VS Code](https://code.visualstudio.com/)

* [Node.js](https://nodejs.org/en/)

* [Angular CLI](https://cli.angular.io/)

If you clone the repo, make sure you setup the database and Entity Framework migrations!
This is how:

In Visual Studio 2019:

1. Remove the contents of the folder Migrations.
2. Then open the Package Manager Console (Tools->Nuget Package Manager->Package Manager Console).
3. Run the following commands:

```
Add-Migration Initial
Update-Database
```

4. Now press F5 and run the application. You will have an empty blog list to start with.

## Debugging
If you get an error message running the app, first make sure you installed node modules using the npm install command.
In VS Code or in the Node.js command prompt, run `npm install` in the ClientApp folder.