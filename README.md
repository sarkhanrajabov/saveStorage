# saveStorage
saveStorage is a JQuery plugin for easliy save form data

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
    <script src="savestorage.js"></script>

HTML

    <form action="/action" id="myform"> // id required
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
        nonSavingInputs: ['password','hidden']  // does not save input types
    });
