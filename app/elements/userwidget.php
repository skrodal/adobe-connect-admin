<p class="page-header text-muted text-center uppercase">Bruker</p>

<div class="row">
    <div class="col-md-3"></div>

    <div class="col-md-6">
        <div class="box box-widget widget-user">
            <div class="widget-user-header bg-dark-gray">
                <h3 class="widget-user-username userFullName"><!--></h3>
                <h5 class="widget-user-desc"><span class="feideOrg"><!--></span></h5>
            </div>

            <div class="widget-user-image">
                <img class="img-circle userImage" src="" alt="Profilbilde"><!-->
            </div>

            <div class="box-footer">
                <div class="row">
                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                            <h5 class="description-header xhr meHasAccount" style="padding-bottom: 5px;"><!--></h5>
                            <span class="description-text">Konto</span>
                        </div><!-- /.description-block -->
                    </div><!-- /.col -->

                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                            <h5 class="description-header" style="padding-bottom: 5px;"><button class="btn btn-link xhr meRoomsCount"><!--></button></h5>
                            <span class="description-text">Møterom</span>
                        </div><!-- /.description-block -->
                    </div><!-- /.col -->

                    <div class="col-sm-4">
                        <div class="description-block">
                            <h5 class="description-header" style="padding-bottom: 5px;"><span class="userRole userRoleDescription" data-toggle="tooltip" data-placement="top" title="Tilgang" style="border-bottom: 2px dotted lightblue"><!--></span></h5>
                            <span class="description-text">Rolle</span>
                        </div><!-- /.description-block -->
                    </div>
                          <!-- /.col -->
                </div><!-- /.row -->
            </div>

            <div class="box-footer bg-dark-gray small" style="padding: 10px;">
                <div class="isAdmin collapse">
                    <p class="uninett-fontColor-white text-muted">Inviter andre berettigede fra <span class="feideOrg"></span> til bli OrgAdmin:</p>
                    <div class="input-group input-group-sm">
                        <input type="text" id="inviteURL" type="text" class="form-control inviteURL" readonly style="background-color: #FFF;">
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-info btn-flat" data-clipboard-target="#inviteURL" data-toggle="tooltip" data-placement="top" title="Kopier"><i class="ion ion-clipboard"></i></button>
                        </span>
                    </div>
                </div>
                <div class="isGuest collapse">
                    <span class="uninett-fontColor-white text-muted">Dersom du trenger tilgang som OrgAdmin, send en epost til <span class="supportEmail"><!--></span></span>
                </div>

            </div>


        </div>
    </div>

    <div class="col-md-3"></div>
</div>


<div id="modalUser" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="title">
	<div class="modal-dialog modal-sm" role="document"> <!-- modal-lg / modal-sm -->
		<div class="modal-content">
			<div class="modal-header bg-dark-gray">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
				<h4 id="title" class="modal-title uninett-fontColor-white">Dine møterom</h4>
			</div>

			<div class="modal-body">
                <div id="userRoomsTable" class="table-responsive">
                    <p>Klikk for å åpne rom i ny fane</p>
                    <table class="table">
                        <thead><tr><th>Rom</th><th>Opprettet</th></tr></thead>
                        <tbody><!--></tbody>
                    </table>
                </div>
			</div>

			<div class="modal-footer bg-dark-gray">
				<button type="button" class="btn btn-default" data-dismiss="modal">Lukk</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->

