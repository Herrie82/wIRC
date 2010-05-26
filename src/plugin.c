/*=============================================================================
 Copyright (C) 2009 Ryan Hope <rmh3093@gmail.com>

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 =============================================================================*/

#include <string.h>
#include <glib.h>

#include "wIRC.h"

GMainLoop *loop = NULL;

void plugin_initialize() {
	loop = g_main_loop_new(NULL, FALSE);
	plugin_client_init();
	PDL_MojoRegistrationComplete();
}

void luna_service_start() {

	//setup_event_callbacks();

	//wIRCd_clients = g_hash_table_new(g_str_hash, g_str_equal);
	//if (wIRCd_clients)
	g_main_loop_run(loop);

}

void luna_service_cleanup() {

	//if (wIRCd_clients)
		//g_hash_table_destroy(wIRCd_clients);

}