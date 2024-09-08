import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

export default function SideNavigation() {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse href="#" icon={IoBookSharp} label="Courses">
            <Sidebar.Item href="/admin/courses">View Course</Sidebar.Item>
            <Sidebar.Item href="/admin/edit-courses">Edit Course</Sidebar.Item>
            <Sidebar.Item href="/admin/edit-topics">Edit Topics</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="/admin/users" icon={FaUser}>
            Users
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={IoLogOutOutline}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
