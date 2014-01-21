// Make sure the document is ready to be handled
$(document).ready(function($) {

  // Set the Xively API key (https://xively.com/users/YOUR_USERNAME/keys)
  xively.setKey( "6pEgzd6tty8KosjW7w7XzVElvPrAFXTCiH64AqK5jqHfrH2I" );

  var feedID        = 1552237822,          // Feed ID (the last number on the URL on the feed page on Xively)
      datastreamID  = "doorState";       // Datastream ID
      selector      = "#myelement";   // Your element on the page - takes any valid jQuery selector

  // Get datastream data from Xively
  xively.datastream.get (feedID, datastreamID, function ( datastream ) {
    // WARNING: This code is only executed when we get a response back from Xively, it will likely execute after the rest your script
    // NOTE: The variable "datastream" will contain all the Datastream information as an object. The structure of Datastream objects can be found at: 
    // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream


    // Display the current value from the datastream
    if ( datastream["current_value"] == "1" ) {
        $(selector).html( "open" );
    } else {
        $(selector).html( "closed" );
    }
    

    // Getting realtime! The function associated with the subscribe method will be executed every time there is an update to the datastream
    xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ) {
        // Display the current value from the updated datastream
        if ( datastream_updated["current_value"] == "1" ) {
            $(selector).html( "open" );
        } else {
            $(selector).html( "closed" );
        }
    });

  });

  // WARNING: Code here will continue executing while we get the datastream data from Xively, use the function associated with datastream.get to work with the data, when the request is complete
});
