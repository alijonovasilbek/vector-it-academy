import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./core/layouts/layout-container"),
    children: [
      {
        path: "students",
        loadChildren: () => import("./students/student.routes"),
      },
      {
        path: "mentor",
        loadComponent: () =>
          import("./mentor/mentor").then((m) => m.MentorComponent),
      },
    ],
  },

  { path: "admin", component: AdminComponent },
  { path: "**", redirectTo: "/admin" },
];
