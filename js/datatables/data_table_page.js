$(document).ready(function() {
	/* BASIC ;*/
	var responsiveHelper_dt_basic = undefined;
	var responsiveHelper_datatable_fixed_column = undefined;
	var responsiveHelper_datatable_col_reorder = undefined;
	var responsiveHelper_datatable_tabletools = undefined;

	var breakpointDefinition = {
		width1024: 1024,
		width480: 480
	};

	$('.dt_basic').dataTable({
		"sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
			"t" +
			"<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
		"autoWidth": true,
		"oLanguage": {
			"sSearch": '<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>',
			"oPaginate": {
				"sPrevious": "<",
				"sNext": ">"
			}
		},
		"preDrawCallback": function() {
			// Initialize the responsive datatables helper once.
			if(!responsiveHelper_dt_basic) {
				responsiveHelper_dt_basic = new ResponsiveDatatablesHelper($('.dt_basic'), breakpointDefinition);
			}
		},
		"rowCallback": function(nRow) {
			responsiveHelper_dt_basic.createExpandIcon(nRow);
		},
		"drawCallback": function(oSettings) {
			responsiveHelper_dt_basic.respond();
		},
		"pageLength": 10,
		//"pagingType": "simple",
		"searching": false,
		"lengthChange": false
	});
	/* END BASIC */
	$("div.dt-toolbar").hide();
	$("div.dt-toolbar + table").css("cssText","margin-top:0!important;");
})
