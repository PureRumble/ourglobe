og.core.define(
[ "require", "exports" ],
function( require, exports )
{

function SchemaError( msg, errorVar, errorCode, errorPlace )
{
	if( conf.doVer() === true )
	{
		if( !( arguments.length >= 1 || arguments.length <= 4 ) )
		{
			throw new RuntimeError(
				"Between one and four args must be provided",
				{ providedArgs: arguments }
			);
		}
		
// Args dont need to be further verified as this is already done
// by OurGlobeError
	}
	
	if( errorPlace === undefined )
	{
		errorPlace = SchemaError;
	}
	
	SchemaError.ourglobeSuper.call(
		this, msg, errorVar, errorCode, errorPlace
	);
}

exports.SchemaError = SchemaError;

var RuntimeError =
	require( "og/d/sys/runtimeerror" ).RuntimeError
;

var conf = require( "og/d/conf/conf" ).conf;
var sys = require( "og/d/sys/sys" ).sys;

sys.extend( SchemaError, RuntimeError );

});
