import { useState } from "react";
import {
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";

import UserData from "../components/UserData";
import "../styles/UserManagement.css";

type User = {
  name: string;
  email: string;
  initials: string;
  status: string;
  level: string;
};

const users: User[] = [
  {
    name: "Elena Vance",
    email: "elena.v@example.com",
    initials: "EV",
    status: "ACTIVE",
    level: "ELITE LEVEL",
  },
  {
    name: "Marcus Wright",
    email: "marcus.w@example.com",
    initials: "MW",
    status: "ACTIVE",
    level: "PRO LEVEL",
  },
  {
    name: "Alex Rivera",
    email: "alex.r@example.com",
    initials: "AR",
    status: "ACTIVE",
    level: "ELITE LEVEL",
  },
  {
    name: "Sarah Connor",
    email: "sarah.c@example.com",
    initials: "SC",
    status: "INACTIVE",
    level: "ROOKIE",
  },
  {
    name: "Jordan Smith",
    email: "jordan.s@example.com",
    initials: "JS",
    status: "ACTIVE",
    level: "PRO LEVEL",
  },
];

function UserManagement() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => {
    const searchValue = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="content">

      {/* PAGE HEADING */}
      <section className="page-heading">

        <div className="home-icon">
          <Search size={20} />
        </div>

        <div>
          <h1>User Management</h1>

          <div className="breadcrumb">
            <span>SafeStride</span>
            <b>/</b>
            <span>Admin Dashboard</span>
            <b>/</b>
            <strong>users</strong>
          </div>
        </div>

      </section>


      {/* USERS LAYOUT */}

      <div
        className={`users-layout ${
          selectedUser ? "with-details" : ""
        }`}
      >

        {/* =========================
            USER LIST
        ========================= */}

        <div className="users-list-panel">

          {/* HEADER */}

          <div className="users-list-header">

            <div className="users-list-header-top">

              <div>
                <h2>SafeStride Users</h2>

                <span className="users-count">
                  {filteredUsers.length} Users Found
                </span>
              </div>

            </div>


            {/* SEARCH */}

            <div className="user-search">

              <div className="user-search-box">

                <Search size={15} />

                <input
                  type="text"
                  placeholder="Search name, email, or user ID..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

              <button className="user-filter-button">
                <Filter size={16} />
              </button>

            </div>

          </div>


          {/* USER LIST */}

          <div className="users-list">

            {filteredUsers.map((user) => (

              <div
                key={user.email}
                className={`user-item ${
                  selectedUser?.email === user.email
                    ? "active"
                    : ""
                }`}
              >

                {/* AVATAR */}

                <div className="user-avatar">
                  {user.initials}
                </div>


                {/* USER INFORMATION */}

                <div className="user-info">

                  <div className="user-name">
                    {user.name}
                  </div>

                  <div className="user-email">
                    {user.email}
                  </div>


                  {/* TAGS */}

                  <div className="user-tags">

                    <span
                      className={`user-tag ${
                        user.status.toLowerCase()
                      }`}
                    >
                      {user.status}
                    </span>

                    <span className="user-tag elite">
                      {user.level}
                    </span>

                  </div>

                </div>


                {/* ARROW */}

                <button
                  className="user-arrow-button"
                  onClick={() =>
                    setSelectedUser(user)
                  }
                  aria-label={`View ${user.name}`}
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            ))}


            {/* NO RESULTS */}

            {filteredUsers.length === 0 && (

              <div className="no-users">
                No users found.
              </div>

            )}

          </div>

        </div>


        {/* =========================
            USER DETAILS
        ========================= */}

        {selectedUser && (

          <UserData
            user={selectedUser}
            onClose={() =>
              setSelectedUser(null)
            }
          />

        )}

      </div>

    </div>
  );
}

export default UserManagement;