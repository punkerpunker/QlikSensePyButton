define( ['qlik'], 
function (qlik) {
	return {
		support : {
			snapshot: false,
			export: false,
			exportData : false
		},
		
		definition: { 
			// property panel definition
			component: 'accordion',
			items: {		
				appearance: {
					uses: "settings",
					items: {
						extensionsettings: {
							label: "This Extension",
							type: "items",
							items: [
								{
									"type": "string",
									"expression": "optional",
									"defaultValue": "Run Python",
									"order": 0,
									"ref": "buttonlabel",
									"label": "Button Label"
								},
								{
									"component": "dropdown",
									"type": "string",
									"defaultValue": "left",
									"options": [
									  {
										"label": "left",
										"value": "left"
									  },
									  {
										"label": "center",
										"value": "center"
									  },
									  {
										"label": "right",
										"value": "right"
									  }
									],
									"order": 1,
									"ref": "buttonalign",
									"label": "Button Alignment"
								},
								{
									"type": "boolean",
									"expression": "optional",
									"defaultValue": false,
									"order": 2,
									"ref": "fullwidth",
									"label": "Button 100% width"
								}
							]							
						}					
					}					
				},
				py: {
					label: "Python Function",
					type: "items",
					items:[{
								"type": "string",
								"expression": "optional",
								"defaultValue": "",
								"order": 0,
								"ref": "function_name",
								"label": "Function Name"
							},
							{
								"type": "string",
								"expression": "optional",
								"defaultValue": "",
								"order": 1,
								"ref": "args",
								"label": "Arguments (comma separated)"
							},
							{
								"type": "boolean",
								"expression": "optional",
								"defaultValue": "1",
								"order": 2,
								"ref": "need_reply",
								"label": "SSE Reply"
							},
						]							
					}, 
				about: {
					label: "About",
					type: "items",
					items: {
						authorText: {
							label: "by Gleb Vazhenin",
							component: "text"
						}
					}
				}
			}
		},		
		
		paint: function ($element, layout) {
			
			var me = this;
			var id = me.options.id;
			var app = qlik.currApp(this); 		
			
			// create button with LeonardoUI, label & style it according to settings
			var html = '<div style="text-align:' + layout.buttonalign + ';">';
			html += '<button class="lui-button" data-cmd="pybtn' + id + '" id="'+id+'" ';
			html += layout.fullwidth?'style="width:100%;">':'>';
			html += layout.buttonlabel + '</button>';
			html += '</div>';
			$element.html(html);
			
			// catch click-event of button
 			$("#"+id).click(
			function(event){					
				app.createGenericObject({
					sse_reply: {
						  qStringExpression: "ScriptPandas.ScriptEval('qResult = "+layout.function_name+"("+layout.args+")')"
						}
					}, 
				function ( reply ) {
					if (layout.need_reply) {
						var str = " sse_reply:" + reply.sse_reply;
						alert(str)
					}
					app.destroySessionObject(reply.qInfo.qId);					
						});
				})
			
		}
	}
});

