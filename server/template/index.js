let getIndexRendered = (html, initialState) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>sharlly's personal site</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link href="//cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet">  
			<link href="//yxy-site.oss-cn-hangzhou.aliyuncs.com/app.css" rel="stylesheet">
		</head>
		<body>
			<div id="app">
				<div>
					${html}
				</div>
			</div>
			<script type="text/javascript" src="//yxy-site.oss-cn-hangzhou.aliyuncs.com/client.js"></script>
			<script src="//cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>
			<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
			<script src="//apps.bdimg.com/libs/jquery-lazyload/1.9.5/jquery.lazyload.min.js"></script>
		</body>
		</html>
	`;
};

export {
	getIndexRendered
};