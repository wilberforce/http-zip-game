/*
 * Copyright (c) 2016-2021  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 * 
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

import Resource from "Resource"
import { ZIP } from "zip"
import ZipServer from "ZipServer"
import Net from "net"
import config from "mc/config"

const server = new ZipServer({
	port: config.www.port
}, new ZIP(new Resource("www.zip")));

trace(`Ready at http://${Net.get("IP")}:${config.www.port}/\n`);

