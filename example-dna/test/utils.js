const createEntry = (caller) => (content = "sample content") =>
  caller.call("rolesTest", "example", "create_my_entry", {
    entry: { content },
  });

const assignRole = (caller) => (agentAddress, roleName) =>
  caller.call("rolesTest", "example", "assign_role", {
    role_name: roleName,
    agent_address: agentAddress,
  });

const unassignRole = (caller) => (agentAddress, roleName) =>
  caller.call("rolesTest", "example", "create_role", {
    role_name: roleName,
    agent_address: agentAddress,
  });

const getAllRoles = (caller) => () =>
  caller.call("rolesTest", "example", "get_all_roles", {});

const getAgentsWithRole = (caller) => (roleName) =>
  caller.call("rolesTest", "example", "get_role_agents", {
    role_name: roleName,
  });

const getAgentRoles = (caller) => (agentAddress) =>
  caller.call("rolesTest", "example", "get_agent_roles", {
    agent_address: agentAddress,
  });

module.exports = {
  createRole,
  assignRole,
  unassignRole,
  getAgentRoles,
  getRole,
  getAllRoles,
  createEntry,
};
