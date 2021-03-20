function getCurrentStatus(activities) {
  const active = activities.filter(act => act.isActive)
  const current = active[active.length - 1]
  return current || {}
}

export default getCurrentStatus
