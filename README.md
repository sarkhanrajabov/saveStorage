# saveStorage
> saveStorage is a lightweight jQuery plugin that automatically stores and recovers form values to prevent losing data when editing an HTML form.

Supported elements:
----------------------

- input (text,number,email,password...)
- radio, checkbox (input)
- select
- textarea

Usage:
---------------------
Include jquery and saveStorage JS file
  
    <script src="jquery.js"></script>
    <script src="savestorage.min.js"></script>

HTML

    <form id="myform"> // id required
      <div>
        <label>Name</label>
        <input type="text" name="name">
      </div>
      <div>
        <label>Surname</label>
        <input type="text" name="surname">
      </div>
    </form>
    
initialize saveStorage

    $('#myform').saveStorage();

Options:
------------------

    $('#myform').saveStorage({
        exclude: ['password','hidden']  // does not save input types
    });
