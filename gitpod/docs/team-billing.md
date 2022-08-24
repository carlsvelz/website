---
section: develop
title: Team Billing
---

<script context="module">
  export const prerender = true;
</script>

# Team Billing

> Team Billing is part of [Teams & Projects](/docs/teams-and-projects), currently in [Beta](/docs/references/gitpod-releases).

> **NOTE**
> This first iteration of Team Billing improves Team Plans by:
>
> 1. Auto-subscribing new members when they join or leave the team.
> 2. Pro-rata billing for new members who join in the middle of a billing cycle.
>
> If you prefer to continue to manage membership of [**Team Plans**](/docs/teams) manually, you can.
>
> The next iteration of Team Billing will replace Team Plans with Usage-Based Billing.

Team Billing allows you to pay for your whole team with a single subscription. You can choose between the **Team Professional** plan, or the **Team Unleashed** plan.

With Team Billing, all plan seats will be managed automatically, by auto-subscribing new members, and unsubscribing members who leave.

Team Billing can be accessed under Team Settings if you are a Team owner.

![Team Billing New](../../../static/images/docs/team-billing-new.png)

Once a plan is active, Team Billing will auto-subscribe new members, and the count will update automatically.

![Team Billing New](../../../static/images/docs/team-billing-subscribed.png)

## Good to know

- A Team can only have one active Team Billing plan.
- With Team Billing, all team members, including owners, are auto-subscribed to the plan.
- New members are added using a shared [invite URL](/docs/teams-and-projects#add-members-to-a-team) which can be reset.
- When new members join in the middle of a billing period, you will be billed pro-rata for the remaining fraction of the month.
- See [Teams & Projects](/docs/teams-and-projects) to create a new Team.
