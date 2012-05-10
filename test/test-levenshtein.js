function levenstein( first, second ){
	var d	 = [],
		flen = first.length,
		slen = second.length;
	
	for( i = 0; i <= flen; i++ ){
		d[i] = d[i] ? d[i] : [];
		d[i][0] = i;
	}
	
	for( j = 0; j <= slen; j++ ){
		d[0][j] = d[0][j] ? d[0][j] : [];
		d[0][j] = j;
	}
	
	for( j = 1; j <= slen; j++ ){
		for( i = 1; i <= flen; i++ ){
			if( first[i-1] == second[j-1] ){
				d[i][j] = d[i-1][j-1];
			}else{
				d[i][j] = Math.min( 
					d[i-1][j]	+ 1, 
					d[i][j-1]	+ 1, 
					d[i-1][j-1] + 2 
				);
			}
		}
	}
	
	printMatrix(d, first, second);
	
	return d[flen][slen];
}

function printMatrix( d, f, s ){
	var out = "";
	
	out = ["  ", "0"].concat(s.split('')).join(' | ') + " |\n";
	
	for( var i = 0; i < d.length; i++ ){
		out += ( i == 0 ? " 0" :  ' ' + (f[i-1] ? f[i-1] : '-' )) + " |";
		for( var j = 0; j < d[i].length; j++ ){
			out += (isNaN(d[i][j]) ? -1 : ("  " + d[i][j]).slice(-2) ) + " |";
		}
		out += "\n";
	}
	
	console.log(out);
	console.log("\n");
}

var f = 'benoit',
	s = 'noir';

console.log( ["Levensten distance between '", f, "' and '", s, "': ", levenstein(f, s)].join("") );