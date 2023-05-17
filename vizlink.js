

document.addEventListener("DOMContentLoaded", function() {
   var getSource = function(callback) {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', "vizIndex.json", true);
       xhr.responseType = 'json';
       xhr.onload = function() {
	 var status = xhr.status;
	 if (status === 200) {
	   callback(null, xhr.response);
	 } else {
	   callback(status, xhr.response);
	 }
       };
       xhr.send();
   };

    getSource(function(e,vizIndex){
    
    // mVizIndex = "" 
	
    let moduleName = window.location.pathname.split("/").pop().slice(0,-5);
	const defLinks = [];
        const mVizIndex = vizIndex[moduleName];
	console.log(mVizIndex);
	let vizFrame = document.createElement("iframe");
	
    document.querySelectorAll("a.Function").forEach(
	function(elem){
	    if(elem.id == elem.href.split("#").pop() ){

                defName = elem.innerText.trim();
		    // slideSquareFaces
		if(["slideSquare","∙v≡∙v'","_∙v'_","_∙v_"].includes(defName)){
		    defName = "_." + defName;
		}
		// elem.style.color = ";
		let vizLink = moduleName + "." + (defName);
		let isIn = mVizIndex.includes(vizLink + ".json");
		    
		//       indexSource.includes(
		//     vizLink
		// 	.replaceAll("∙","&#x2219;")
		//         .replaceAll("₂","&#x2082;")
		//         .replaceAll("π","&#x3C0;")
		//         .replaceAll("₃","&#x2083;")
		//         .replaceAll("¹","&#xB9;")
		//         .replaceAll("²","&#xB2;")
		//         .replaceAll("≡","&#x2261;")
		//         .replaceAll("'","&#x27;")
		//         .replaceAll("→","&#x2192;")
		//         .replaceAll("Ω","&#x3A9;")
		    
		// 	+ ".json"
		// );
		// console.log(defName);
                if(isIn){
		    let urlLink =  "../web/#"+vizLink;
		    let frameLink =  "../web/embed.html#"+vizLink;
                    elem.href = urlLink;
		    defLinks.push(elem);
		    let vizIcon = document.createElement("div");
		    vizIcon.classList.add("vizicon");
		    elem.classList.add("vizlink");
		    elem.parentNode.insertBefore(vizIcon,elem);
		    elem.style.textDecoration = "underline";

		    elem.href = "#";
		    elem.addEventListener("click", function(e){
                        vizFrame.src = frameLink;
			vizFrame.style.width = "400px";
			vizFrame.style.height = "400px";
			vizFrame.style.display = "block";
			elem.parentNode.insertBefore(vizFrame,elem);
			e.preventDefault();
			
		    });

		    let linkNewW = document.createElement("a");
		    linkNewW.innerHTML = " (open)"
                    linkNewW.href = urlLink;

		    elem.insertAdjacentElement('afterend',linkNewW);
		}
		
		
		// console.log(vizLink)
	    }
	    // return true;
	}
    );
    
	console.log(defLinks.length);
	});
});
