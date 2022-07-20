import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FormExample = () => {
  return (
    <React.StrictMode>
      <div id="blog">
        <div className="blog-content">
          <div className="blog-grid">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="main-title text-center wow fadeIn"
                    style={{ marginTop: "80px" }}
                  >
                    <h3>Blog Details</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    <p>
                      ReactJS/Php-Laravel and Web Components everything else
                      accomplished on my spare software development time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details wow fadeIn text-left">
              <div className="container">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-xl-9 col-lg-9 col-md-12 col-xs-12 col-sm-12">
                    <div className="blog-main">
                      <img
                        src="assets/img/blog-details/form-example.png"
                        alt="Form Example in Laravel 8"
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>Form Example in Laravel 8</strong>
                        </h3>
                      </div>
                      <div className="blog-middle">
                        <i class="fa fa-user blog-icon" aria-hidden="true"></i>
                        <h2>Admin</h2>
                        <i
                          class="fa fa-calendar blog-icon"
                          aria-hidden="true"
                        ></i>
                        <h2>28 September 2021</h2>
                      </div>
                      <div className="blog-bottom">
                        <p>
                          Laravel 8 form example tutorial. In this post, i will
                          teach from starting on how to send form data on
                          controller and how to insert form data in database
                          using laravel 8.
                        </p>
                        <p>
                          If you are trying to create form and want to insert
                          form data into database using laravel 8 latest
                          version. So this post will help you to do this.
                        </p>
                        <p>
                          Because in this post example, i will create
                          contact-list form and submit to database using laravel
                          8 version.
                        </p>
                        <p>
                          Visit my
                          <a
                            href="https://github.com/sanajitjana"
                            title="Sanajit Jana"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github Profile
                          </a>
                          and do checkout this
                          <a
                            href="https://github.com/sanajitjana/laravel-curd"
                            title="Laravel Curd"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            repository
                          </a>
                        </p>
                        <h4>How to Submit Form Data into Database?</h4>
                        <ul>
                          <li>Step 1 – Install Laravel 8 Application</li>
                          <li>Step 2 – Configuring Database using Env File</li>
                          <li>
                            Step 3 – Create Model &amp; Migration File For Add
                            Blog Post Form
                          </li>
                          <li>Step 4 – Create Routes</li>
                          <li>Step 5 – Creating Controller</li>
                          <li>
                            Step 6 – Create Blade File For Add Blog Post Form
                          </li>
                          <li>Step 7 – Start Development Server</li>
                          <li>Step 8 – Run Laravel 8 Form App On Browser</li>
                        </ul>
                        <br />
                        <h4>Step 1 – Install Laravel 8 Application</h4>
                        <p>
                          In step 1, open your terminal and navigate to your
                          local web server directory using the following
                          command:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {"//for windows user\ncd xampp/htdocs"}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="php" style={docco}>
                          {"//for ubuntu user\ncd var/www/html"}
                        </SyntaxHighlighter>
                        <p>
                          Then install laravel 8 latest application using the
                          following command:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {
                            "composer create-project --prefer-dist laravel/laravel LaravelForm"
                          }
                        </SyntaxHighlighter>
                        <h4>Step 2 – Configuring Database using Env File</h4>
                        <p>
                          In step 2, open your downloaded laravel 8 app into any
                          text editor. Then find .env file and configure
                          database detail like following:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {
                            "DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=db name\nDB_USERNAME=db user name\nDB_PASSWORD=db password"
                          }
                        </SyntaxHighlighter>
                        <h4>
                          Step 3 – Create Model &amp; Migration File For Add
                          Blog Post Form
                        </h4>
                        <p>
                          In step 3, open command prompt and navigate to your
                          project by using the following command:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {"cd / LaravelForm"}
                        </SyntaxHighlighter>
                        <p>
                          Then create model and migration file by using the
                          following command:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {"php artisan make:model Post -m"}
                        </SyntaxHighlighter>
                        <p>
                          The above command will create two files into your
                          laravel 8 form application, which is located inside
                          the following locations:
                        </p>
                        <ul>
                          <li>LaravelForm/app/Models/Post.php</li>
                          <li>
                            LaravelForm/database/migrations/2020_09_09_025857_create_posts_table.php
                          </li>
                        </ul>
                        <p>
                          So, find create_posts_table.php file inside
                          LaravelForm/database/migrations/ directory. Then open
                          this file and add the following code into function
                          up() on this file:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {
                            "public function up()\n    {\n        Schema::create('posts', function (Blueprint $table) {\n            $table->id();\n            $table->string('title');\n            $table->text('description');\n            $table->timestamps();\n        });\n    }"
                          }
                        </SyntaxHighlighter>
                        <p>
                          Now, open again your terminal and type the following
                          command on cmd to create tables into your selected
                          database:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {"php artisan migrate"}
                        </SyntaxHighlighter>
                        <h4>Step 4 – Create Routes</h4>
                        <p>
                          In step 4, open your web.php file, which is located
                          inside routes directory. Then add the following routes
                          into web.php file:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {
                            "<?php\nuse IlluminateSupportFacadesRoute;\nuse AppHttpControllersPostController;\n/*\n|--------------------------------------------------------------------------\n| Web Routes\n|--------------------------------------------------------------------------\n|\n| Here is where you can register web routes for your application. These\n| routes are loaded by the RouteServiceProvider within a group which\n| contains the 'web' middleware group. Now create something great!\n|\n*/\nRoute::get('/', function () {\n      return view('welcome');\n});\nRoute::get('add-blog-post-form', [PostController::class, 'index']);\nRoute::post('store-form', [PostController::class, 'store']);"
                          }
                        </SyntaxHighlighter>
                        <h4>Step 5 – Creating Controller</h4>
                        <p>
                          In step 5, create form controller by using the
                          following command:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {"php artisan make:controller PostController"}
                        </SyntaxHighlighter>
                        <p>
                          The above command will create PostController.php file,
                          which is located inside
                          LaravelForm/app/Http/Controllers/ directory.
                        </p>
                        <p>
                          So open PostController.php file and add the following
                          code into it:
                        </p>
                        <SyntaxHighlighter language="php" style={docco}>
                          {
                            "<?php\nnamespace AppHttpControllers;\nuse IlluminateHttpRequest;\nuse AppModelsPost;\nclass PostController extends Controller\n{\npublic function index()\n{\nreturn view('add-blog-post-form');\n}\npublic function store(Request $request)\n{\n        $post = new Post;\n        $post->title = $request->title;\n        $post->description = $request->description;\n        $post->save();\n        return redirect('add-blog-post-form')->with('status', 'Blog Post Form Data Has Been inserted');\n    }\n}"
                          }
                        </SyntaxHighlighter>
                        <h4>Step 6 – Create Blade File For Form</h4>
                        <p>
                          In step 6, create new blade view file that named
                          add-blog-post-form.blade.php inside resources/views
                          directory for add blog post form.
                        </p>
                        <p>
                          Then add the following html form code into
                          add-blog-post-form.blade.php:
                        </p>
                        <SyntaxHighlighter language="html" style={docco}>
                          {
                            '<!DOCTYPE html>\n<html>\n<head>\n    <title>Laravel 8 Form Example Tutorial</title>\n    <meta name="csrf-token" content="{{ csrf_token() }}">\n    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">\n</head>\n<body>\n  <div class="container mt-4">\n  @if(session("status"))\n    <div class="alert alert-success">\n        {{ session("status") }}\n    </div>\n  @endif\n  <div class="card">\n    <div class="card-header text-center font-weight-bold">\n      Laravel 8 - Add Blog Post Form Example\n    </div>\n    <div class="card-body">\n      <form name="add-blog-post-form" id="add-blog-post-form" method="post" action="{{url("store-form")}}">\n       @csrf\n        <div class="form-group">\n          <label for="exampleInputEmail1">Title</label>\n          <input type="text" id="title" name="title" class="form-control" required="">\n        </div>\n        <div class="form-group">\n          <label for="exampleInputEmail1">Description</label>\n          <textarea name="description" class="form-control" required=""></textarea>\n        </div>\n        <button type="submit" class="btn btn-primary">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>  \n</body>\n</html>'
                          }
                        </SyntaxHighlighter>
                        <h4>Step 7 – Start Development Server</h4>
                        <p>
                          Finally, open your command prompt again and run the
                          following command to start development server for your
                          laravel 8 form application:
                        </p>
                        <SyntaxHighlighter language="html" style={docco}>
                          {"php artisan serve"}
                        </SyntaxHighlighter>
                        <h4>Step 8 – Run Laravel 8 Form App On Browser</h4>
                        <p>
                          In step 8, open your browser and fire the following
                          url into your browser:
                        </p>
                        <SyntaxHighlighter language="html" style={docco}>
                          {"http://127.0.0.1:8000/add-blog-post-form"}
                        </SyntaxHighlighter>
                        <p>
                          When you fire the above given url on browser, you will
                          look like in the following image:
                        </p>
                        <img
                          src="assets/img/blog-details/form-example-output.png"
                          alt="Form Example in Laravel 8"
                          class="blog-img"
                        />
                        <br />
                        <br />
                        <br />
                        {/* Go to www.addthis.com/dashboard to customize your tools */}
                        <div class="addthis_inline_share_toolbox"></div>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul>
                        <li>
                          <a href="/ui-ux">Previous Post</a>
                        </li>
                        <li>
                          <a
                            href="https://dev.to/sanajitjana"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Next Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default FormExample;
