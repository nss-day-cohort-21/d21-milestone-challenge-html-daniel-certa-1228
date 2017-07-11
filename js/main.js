console.log("Test")

//array of blog entries
let blogContent = [
	{
		title: "COBOL",
		copy: "COBOL (/ˈkoʊbɒl/, an acronym for common business-oriented language) is a compiled English-like computer programming language designed for business use. It is imperative, procedural and, since 2002, object-oriented. COBOL is primarily used in business, finance, and administrative systems for companies and governments. COBOL is still widely used in legacy applications deployed on mainframe computers, such as large-scale batch and transaction processing jobs. But due to its declining popularity and the retirement of experienced COBOL programmers, programs are being migrated to new platforms, rewritten in modern languages or replaced with software packages. Most programming in COBOL is now purely to maintain existing applications.",
		poster: "Dan",
		date: "July 10, 2017",
		time: "9:18pm"
	},
	{
		title: "Pascal",
		copy: "Pascal is an imperative and procedural programming language, which Niklaus Wirth designed in 1968–69 and published in 1970, as a small, efficient language intended to encourage good programming practices using structured programming and data structuring.  Pascal, like many programming languages of today (but unlike most languages in the C family), allows nested procedure definitions to any level of depth, and also allows most kinds of definitions and declarations inside subroutines (procedures and functions). This enables a very simple and coherent syntax where a complete program is syntactically nearly identical to a single procedure or function (except for the heading, which has one of these three keywords).",
		poster: "Dan",
		date: "July 10, 2017",
		time: "10:03pm"
	},
	{
		title: "Fortran",
		copy: "Fortran (formerly FORTRAN, derived from 'Formula Translation') is a general-purpose, imperative programming language that is especially suited to numeric computation and scientific computing. Originally developed by IBM in the 1950s for scientific and engineering applications, Fortran came to dominate this area of programming early on and has been in continuous use for over half a century in computationally intensive areas such as numerical weather prediction, finite element analysis, computational fluid dynamics, computational physics, crystallography and computational chemistry. It is a popular language for high-performance computing and is used for programs that benchmark and rank the world's fastest supercomputers.",
		poster: "Dan",
		date: "July 10, 2017",
		time: "10:03pm"	
	}
];

for (var i = 0; i < blogContent.length; i++) {
//declare our blog variables
let blogTitle = blogContent[i].title;
let blogCopy = blogContent[i].copy;
let blogPoster = blogContent[i].poster;
let blogDate = blogContent[i].date;
let blogTime = blogContent[i].time;
//build our blog entry structure
// let blogCard;
let blogCard = `<article class="blog-post"><h3 class="blog-post-title">${blogTitle}</h3>`;
blogCard += `<p class="blog-post-paragraph">${blogCopy}></p>`;
blogCard += `<section class="blog-post-footer"><p>Posted by ${blogPoster} on ${blogDate} at ${blogTime}.</p></section>`;
 
 console.log(blogCard)

 let blogHolder = document.getElementById("blog-target");
 blogHolder.innerHTML += blogCard;
}






