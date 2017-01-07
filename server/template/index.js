let getIndexRendered = (html, initialState) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>sharlly's personal site</title>
			<link href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet">  
			<link type="text/css" rel="stylesheet" href="http://fast.yinxiangyu.com/app.css" />
		</head>
		<body>
			<div id="app">
				<div>
					${html}
				</div>
			</div>
			<script>
				
			</script>
			<script type="text/javascript" src="http://fast.yinxiangyu.com/client.js"></script>
			<script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>
		</body>
		</html>
	`;
};

export {
	getIndexRendered
};