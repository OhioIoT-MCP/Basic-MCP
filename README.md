# Basic MCP<a href="https://www.ohioiot.com"><img src="https://www.ohioiot.com/logo_150.jpg" width="40" ></a>
#### [(back to Organization Page)](https://github.com/OhioIoT-MCP)

This code was generated in the YouTube video [Write Your Own MCP Connetor in Under 50 Lines](https://youtu.be/MfQx2uX6iCU), which is about using an MCP connector to link your application to AI.  By only adding two files to a conventional NodeJS app, we can turn our express server into an MCP server that can serve data directly to Claude.

The MCP server itself is found in `mcp.js`.  This is analogous to the standard server route, except it is configured to work with AI (see the [MCP docs](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)).  In `tools.js`, we lay out the different 'routes' that are available to the engaged AI client.  This can be likened to a standard API route, wrapped with its own documentation.

To add basic authentication to your MCP server, check out the follow-on YouTube video [Are Your MCP Servers Exposed?](https://youtu.be/kI4rFemShu0) and its corresponding Git repo [Basic MCP Auth](https://github.com/OhioIoT-MCP/Basic-MCP-Auth).

## About
<a href="https://www.ohioiot.com"><img src="https://www.ohioiot.com/logo_150.jpg" width="40" ></a>

*OhioIoT is an IoT platform designed for small-scale IoT projects.  For more, check out our website at [www.OhioIoT.com](https://www.ohioiot.com).*
